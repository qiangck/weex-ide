const fs = require('fs');
const path = require('path');
const transformer = require('weex-transformer');
const qrcode = require('./qrcode');
const config = require('./config.json');

const sample = document.querySelector('#sample');
const codeEl = document.querySelector('#code');
const logsWrapEl = document.querySelector('#logs');
const logsEl = document.querySelector('#logs pre');
const html5El = document.querySelector('#html5');
const qrcodeEl = document.querySelector('#qrcode');
const canvasEl = document.querySelector('#qrcode canvas');

const html5ReadyPromise = new Promise((resolve, reject) => {
    html5El.addEventListener('dom-ready', e => resolve(e));
});

const sampleFilepath = path.join(__dirname, 'sources', 'keymaps.we');
const sampleCode = fs.readFileSync(sampleFilepath, 'utf-8');
const cm = CodeMirror(codeEl, {
    value: sampleCode,
    mode: 'htmlmixed',
    theme: 'monokai',
    tabSize: 2,
    lineWrapping: true,
    lineNumbers: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    extraKeys: {
        'Cmd-Alt-F': cm => {
            cm.setOption('fullScreen', !cm.getOption('fullScreen'));
        },
        'Cmd-S': cm => {
            const value = cm.getValue();
            saveCode(value);
        },
        'Cmd-Alt-L': cm => {
            toggleLogs();
        },
        'Cmd-Alt-R': cm => {
            toggleQRCode();
        },
        'Cmd-Alt-T': cm => {
            openDevToolsForPreview();
        },
        'Esc': cm => {
            if (cm.getOption('fullScreen')) {
                cm.setOption('fullScreen', false);
            }
        }
    }
});

function printLogs(logs) {
    if (logs.length === 0) {
        logsEl.innerHTML = `<p class="success">Save at ${new Date().toLocaleString()}</p>`;
    } else {
        logsEl.innerHTML = logs.map(log => {
            var className = log.reason.match(/^([^:]+?)\:/)[1].toLowerCase();
            return `<p class="${className}" data-at="${log.line}:${log.column}">${log.reason}</p>`;
        }).join('');
    }
}

const localIP = require('local-ip');
const IPProimse = new Promise((resolve, reject) => {
    localIP('en0', (err, res) => {
        if (err) {
            reject(err);
        } else {
            resolve(res);
        }
    });
});
function toggleQRCode() {
    if (html5El.style.display === 'none') {
        html5El.style.display = '';
        qrcodeEl.style.display = '';
    } else {
        html5El.style.display = 'none';
        qrcodeEl.style.display = 'flex';
    }

    IPProimse.then(ip => {
        const url = qrcode.toDataURL(`http://${ip}:${config['serve-port']}/code.js`, {
            canvas: canvasEl
        });
    });
}

function toggleLogs() {
    if (logsWrapEl.style.display === 'none') {
        logsWrapEl.style.display = '';
    } else {
        logsWrapEl.style.display = 'none';
    }
}


const sourceFilepath = path.join(__dirname, 'sources', 'code.we');
const bundleFilepath = path.join(__dirname, 'bundles', 'code.js');
function saveCode(codeStr) {
    fs.writeFileSync(sourceFilepath, codeStr, {
        encoding: 'utf-8',
        mode: '0o755'
    });

    const ret = transformer.transform('code', codeStr);
    printLogs(ret.logs);

    fs.writeFileSync(bundleFilepath, ret.result, {
        encoding: 'utf-8',
        mode: '0o755'
    });
   
    html5El.style.display = '';
    qrcodeEl.style.display = '';
    html5El.src = `file://${__dirname}/html5.html?_=${Date.now()}`;
}

function openDevToolsForPreview() {
    html5ReadyPromise.then(e => {
        html5.openDevTools();
    });
}

saveCode(sampleCode);
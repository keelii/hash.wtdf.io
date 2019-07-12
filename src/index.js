import sha256 from 'crypto-js/sha256';
import sha512 from 'crypto-js/sha512';
import sha1 from 'crypto-js/sha1';
import md5 from 'crypto-js/md5';

const fnMap = {
    sha256, sha512, sha1, md5,
    def: md5
}

let id = (id) => document.getElementById(id)

window.addEventListener('DOMContentLoaded', () => {

    id('source').focus()
    id('source').onkeyup = (e) => {
        const source = e.target.innerText

        ;['sha256', 'sha512', 'sha1', 'md5'].forEach(m => {
            if (id(m)) {
                id(m).value = source ? fnMap[m](source) : ''
            }
        })
    }

})

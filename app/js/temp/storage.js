const storage = function() {
    if(('localStorage' in window) && window['localStorage'] != null){
        return true;
    }
    return false;
};

storage.set = (name, key) => {
    if(storage()) {
        key = JSON.stringify(key);
        localStorage.setItem(name, key);
    }
}

storage.get = (name) => {
    if(storage()) {
        return JSON.parse(localStorage.getItem(name));
    }
}

storage.clear = () => {
    localStorage.clear();
}

module.exports = storage;

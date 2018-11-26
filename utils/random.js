module.exports = (len, caps) => {
    let result = "";
    let chars = "";
    if(!caps) { chars = "0123456789abcdefghijklmnopqrstuvwxyz" } else { chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; };
    
    for(let i = 0; i < len; ++i){
        result += chars[Math.floor(Math.random() * chars.length)];
    }

    return result;
}
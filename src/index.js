module.exports = function check(str, bracketsConfig) {
  	let configMap = new Map();
        
        for (element of bracketsConfig) {
            configMap.set(element[0], element[1])
        }

        let stack = [];

        for (let i = 0; i < str.length; i++) {
            let strVal = str[i];

            if (configMap.has(strVal) &&
                configMap.get(strVal) == strVal &&
                stack[stack.length - 1] == strVal) {
                stack.pop();
            } else if(configMap.has(strVal)) {
                stack.push(strVal);
            } else {
                let prev = stack.pop();
                if (strVal !== configMap.get(prev)) {
                    return false;
                }
            }
        }
        if (stack.length > 0) return false;
        return true;
}

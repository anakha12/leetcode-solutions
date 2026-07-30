/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack=[];
    let op=['+','-','*','/']
    for(let i=0;i<tokens.length;i++){
        if(op.includes(tokens[i])){
            let a=stack.pop();
            let b=stack.pop();
            [a,b]=[b,a]
            switch(tokens[i]){
                case '+':
                        stack.push(a+b);
                        break;
                case '-':
                        stack.push(a-b);
                        break;
                case '*':
                        stack.push(a*b);
                        break;
                case '/':
                        stack.push(Math.trunc(a/b));
                        break;               

            }
        }else{
            stack.push(Number(tokens[i]))
        }
    }
    return stack.pop()
};
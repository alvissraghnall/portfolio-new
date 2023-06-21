const emailCheck = (email: string) => {
    return /(([^<>()\\\.,;:\@"]+(\[^<>()\\\.,;:\@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/.test(email);
}

export const validators = {
    name: (value: string) => {
        return value && value.length > 3;
    },
    email: (value: string) => {
        return value && emailCheck(value);
    },
    message: (value: string) => value && value.length > 5
};
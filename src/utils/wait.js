export default function(seconds, cb) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hurry")
            cb("hurray")
        }, seconds * 1000)
    })
}
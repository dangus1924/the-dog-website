export default function(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hurry")
        }, seconds * 1000)
    })
}
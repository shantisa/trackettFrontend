export const fetchJSON = async (responseObj, errorObj, url, init) => {
    let res = await fetch(url, init)
    if (res.ok) {
        let json = await res.json()
        if (responseObj.isValid(json)) {
            return new responseObj(json)
        } else {
            throw new Error("invalid response")
        }
    }
    let error = JSON.parse(await res.text());
    if (errorObj.isValid(error)) {
        return new errorObj(error)
    } else {
        throw new Error(error)
    }
}
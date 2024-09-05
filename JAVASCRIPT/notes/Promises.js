let p = new Promise((resolve, reject) => {
    let a = 1+1
    if(a==2) 
    {
        resolve('Success')
    }
    else
    {
        reject('failed')
    }
})

p.then ((message) => {
    console.log('This is in the then' + message)
}).catch((message) => {
    console.log('This is in the catch' + message)
})

//-------------------------------EXAMPLES--------------------------//
const userLeft = false
const userWatchingCat = false

function watch(callback,errorCallback)
{
    if (userLeft) {
        errorCallback({
            name : 'User Left',
            message : ':('
        })
    }
    else if(userWatchingCat) {
        errorCallback ({
            name : 'User Watching CAt Meme',
            message : 'webDevSimplified < Cat'
        })
    }else {
        resolve('Thumbs up and Subscribe')
    }
}


//----------------------------------------------------------------//
watch((message) => {

    console.log('Success' + message)
},(error) => {
    console.log(error.name + '' +error.message)
})

function watchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if (userLeft) {
            errorCallback({
                name : 'User Left',
                message : ':('
            })
        }
        else if(userWatchingCat) {
            errorCallback ({
                name : 'User Watching CAt Meme',
                message : 'webDevSimplified < Cat'
            })
        }else {
            resolve('Thumbs up and Subscribe')
        } 
    })
}
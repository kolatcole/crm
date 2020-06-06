export function date(){
    let d = new Date()
    let year = d.getFullYear()
    let month = d.getMonth()+1
    let day = d.getDay()
    if(month<10){
        // return `${year}-0${month}-${day}T04:18:48.379Z`
        month = +`0${month}`
    }
    if(day<10){
        // return `${year}-${month}-0${day}T04:18:48.379Z`
        day = +`0${day}`
    }
    return `${year}-${month}-${day}T04:18:48.379Z`
}
let alien = {
    name:'mathi',
    tech: 'JS',
    laptop: {
        cpu: 'ryzen 7',
        ram: 16,
        brand:'HP'
    }
}

for(let key in alien){
    console.log(key,alien[key]);
}  
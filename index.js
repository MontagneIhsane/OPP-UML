class Drone {
    constructor(parametres) {
        this.id =parametres.id;
        this.status = "available";
        this.model = parametres.model;
        this.battert = parametres.battert;
        this.sensors = parametres.sensors;
        this.position = parametres.position;
    }

fly() {
    console.log("flying");
};

land() {
    console.log("landing");
};

assign_mission(self) {
    console.log("assigning mission");
    self.status = "on mission";
}

complete_mission(self) {
    console.log("mission completed");
    self.status = "available";
}

}; 
//////////////////////////////////////////////////////////////////
//Partie tests
////////////////////////////////////////////////////////////////                
const drone = new Drone({
    idv : "1",
    model : "Model A",
    battert : 100,
    sensors : ["water", "fire"],
    position : "1.1.1"
});

console.log(drone);
console.log();

drone.fly();
console.log();

drone.assign_mission(drone);
console.log(drone.status);
console.log();

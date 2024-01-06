import { world } from "@minecraft/server";

export class database {
    constructor(name){
        this.name = `database:${name}`;
        if(world.getDynamicProperty(this.name) == undefined) world.setDynamicProperty(this.name,JSON.stringify({}));
    }
    set(key,value){
        let prev = JSON.parse(world.getDynamicProperty(this.name));
        prev[JSON.stringify(key)] = value;
        world.setDynamicProperty(this.name,JSON.stringify(prev));
    }
    get(key){
        return JSON.parse(world.getDynamicProperty(this.name))[JSON.stringify(key)];
    }
    keys(){
        return Object.keys(JSON.parse(world.getDynamicProperty(this.name))).map(x=>JSON.parse(x));
    }
    values(){
        return Object.values(JSON.parse(world.getDynamicProperty(this.name)));
    }
    entries(){
        return Object.entries(JSON.parse(world.getDynamicProperty(this.name))).map(x=> x[0] = JSON.parse(x[0]));
    }
    has(key){
        return JSON.parse(world.getDynamicProperty(this.name)).hasOwnProperty(JSON.stringify(key))
    }
    clear(){
        return world.setDynamicProperty(this.name,JSON.stringify({}));
    }
    delete(key){
        let d = JSON.parse(world.getDynamicProperty(this.name));
        d[JSON.stringify(key)] = undefined;
        return world.setDynamicProperty(this.name,JSON.stringify(d));
    }
}
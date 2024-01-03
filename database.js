import { world } from "@minecraft/server";

export class database {
    constructor(name){
        this.name = `database:${name}`;
        world.setDynamicProperty(this.name,JSON.stringify({}));
    }
    set(key,value){
        let prev = JSON.parse(world.getDynamicProperty(this.name));
        prev[key] = value;
        world.setDynamicProperty(this.name,JSON.stringify(prev));
    }
    get(key){
        return JSON.parse(world.getDynamicProperty(this.name))[key]?.value;
    }
    keys(){
        return Object.keys(JSON.parse(world.getDynamicProperty(this.name)));
    }
    values(){
        return Object.values(JSON.parse(world.getDynamicProperty(this.name)));
    }
    entries(){
        return Object.entries(JSON.parse(world.getDynamicProperty(this.name)));
    }
    has(key){
        return key in world.getDynamicProperty(this.name);
    }
    clear(){
        return world.setDynamicProperty(this.name,undefined);
    }
    delete(key){
        let d = JSON.parse(world.getDynamicProperty(this.name));
        return world.setDynamicProperty(this.name,JSON.stringify(d.filter(x=> x.key != key)));
    }
}
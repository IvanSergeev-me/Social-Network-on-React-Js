export const updateObjectInArray = (obj, objId, objPropName, newObjProps) =>{
    return obj.map(
        o =>{
            if(o[objPropName] === objId){
                return{...o, ...newObjProps}
            }
            return o;
        }
    );
}
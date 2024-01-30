LIBRARY({
    name: "JETranslateAPI",
    version: 1,
    shared: false,
    api: "CoreEngine"
})

let JETranslation = {
    getPathToTranslateDir: function(){
        let pathToDir = null
        let resources
        let path = FileTools.ReadJSON(__dir__+"/build.config").resources
        for(resources = path.length - 1; resources >= 0; --resources){
            if(path[resources].resourceType == "java_edition_translate"){
                pathToDir = __dir__ + path[resources].path
                break;
            };
        };
        return pathToDir        
    },
    translation: function(){
        
    },
    translate: function(key, path = this.getPathToTranslateDir()){
        Translation.translate(key);
        if (!!path){
            Translation.addTranslation(key, {
                "en": FileTools.isExists(path + "en_US.lang") ? FileTools.ReadKeyValueFile(path + "en_US.lang", "=")[key] : key
            })
        } else {
            Translation.addTranslation(key, {
                "en": FileTools.isExists(path + "en_US.lang") ? FileTools.ReadKeyValueFile(path + "en_US.lang", "=")[key] : key
            })
        }
    }
};
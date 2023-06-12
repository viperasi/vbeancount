import {open} from "@tauri-apps/api/dialog"
import {readTextFile} from "@tauri-apps/api/fs"

// 注释指令
const BeanComment = ";"

const BeanCmd = {}

const BeanParse = {
    open: async () => {
        let selected = await open({
            multiple: false,
            title: "选择.bean主文件"
        })
        if (!selected) return;
        const content = await readTextFile(selected)
        return BeanParse.parseAll(content)
    },
    parseAll: (content) => {
        let contents = content.split("\n")
        for(let i=0;i<contents.length;i++){
            let line = contents[i]
            if(line[0] === BeanComment){
                continue
            }
            console.log(line)
        }
    },
    parse: (content) => {

    },
    doOption: (content) => {

    },
    doInclude: (content) => {

    },
    doOpen: (content) => {

    },
    doJournal: (content) => {

    }
}

export default BeanParse

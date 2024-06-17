import axios from 'axios'

const commonAPI = async (httpMethod,url,reqBody,reqHeader)=>{
    const reqConFig = {
        method:httpMethod,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }

    return await axios(reqConFig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}

export default commonAPI
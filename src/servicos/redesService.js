import jsonRedes from './redes.json'
const servidor_externo = 'http://localhost/basePolitica21/index.php'; 
export default{
    async loginService(){
        try {
            const response = await fetch(`${servidor_externo}/api_login_c/login`);
                if(!response){
                    throw new Error('Error ao carregar o arquivo JSON');
                }
                    const data = await response.json();
                    //localStorage.getItem('lista_redes1');
                    localStorage.setItem('token_auth',JSON.stringify(data.token));
                    localStorage.setItem('usuario_credenciais',JSON.stringify([data.id_campanha]));
                        return data;
        } catch (error) {
            console.error('Error ao fazer o login',error);
        }
    },
    async getJsonData(){
        try {
            let tokenB = localStorage.getItem('token_auth');
            const token = tokenB.replace('"','');
            const response = await fetch(`${servidor_externo}/api_c/listarRede1`,{
                method:'GET',
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });
                if(!response){
                    throw new Error('Error ao carregar o arquivo JSON');
                }
                    const data = await response.json();
                    console.log('dados retorno rede:',data)
                        return data;
        } catch (error) {
            console.table('Error ao carregar o dados',error);
        }
    },
    async getJsonDataR2(id){
        try {
            let tokenB = localStorage.getItem('token_auth');
            const token = tokenB.replace('"','');

            let idInterge = parseInt(id,10);
            const response = await fetch(`http://localhost/basePolitica21/index.php/api_c/listarRede2?rede1=${idInterge}`,{
                method:'GET',
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });
                if(!response){
                    throw new Error('Error ao carregar o arquivo JSON rede 2');
                }
                    const data = await response.json();
                        return data;
        } catch (error) {
            console.table('Error ao carregar o dados',error);
        }
       //para cadastar use isso, mas troca o url, vai ficar em pos
        // try {
        //     const postInfo = new URLSearchParams();
        //     postInfo.append("rede1",id);
            
        //     const response = await fetch('http://localhost/basePolitica21/index.php/api_c/listarRede2',{
        //         method:'POST',
        //         headers:{
        //             "Content-Type": "application/x-www-form-urlencoded"
        //         },
        //         body:postInfo.toString()
        //     });
        //         if(!response){
        //             throw new Error('Error ao carregar o arquivo JSON rede 2');
        //         }
        //             const data = await response.json();
        //                 return data;
        // } catch (error) {
        //     console.table('Error ao carregar o dados',error);
        // }
    },
    async getJsonDataR3(id){
        try {
            let tokenB = localStorage.getItem('token_auth');
            const token = tokenB.replace('"','');

            let idInterge = parseInt(id,10);
            const response = await fetch(`http://localhost/basePolitica21/index.php/api_c/listarRede3?rede=${idInterge}`,{
                method:'GET',
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });
                if(!response){
                    throw new Error('Error ao carregar o arquivo JSON rede 3');
                }
                    const data = await response.json();
                        return data;
        } catch (error) {
            console.table('Error ao carregar o dados',error);
        }
    },
    async getJsonDataR4(id){
        try {
            let idInterge = parseInt(id,10);
            let tokenB = localStorage.getItem('token_auth');
            const token = tokenB.replace('"','');

            const response = await fetch(`http://localhost/basePolitica21/index.php/api_c/listarRede4?rede=${idInterge}`,{
                method:'GET',
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });
                if(!response){
                    throw new Error('Error ao carregar o arquivo JSON rede 4');
                }
                    const data = await response.json();
                            return data;
        } catch (error) {
            console.table('Error ao carregar o dados',error);
        }
    },
    async getJsonDataR5(id){
        try {
            let idInterge = parseInt(id,10);
            let tokenB = localStorage.getItem('token_auth');
            const token = tokenB.replace('"','');

            const response = await fetch(`http://localhost/basePolitica21/index.php/api_c/listarRede5?rede=${idInterge}`,{
                method:'GET',
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });
                if(!response){
                    throw new Error('Error ao carregar o arquivo JSON rede 5');
                }
                    const data = await response.json();
                        return data;
        } catch (error) {
            console.table('Error ao carregar o dados',error);
        }
    },
    async getJsonDataR6(id){
        try {
            let idInterge = parseInt(id,10);
            let tokenB = localStorage.getItem('token_auth');
            const token = tokenB.replace('"','');

            const response = await fetch(`http://localhost/basePolitica21/index.php/api_c/listarRede6?rede=${idInterge}`,{
                method:'GET',
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });
                if(!response){
                    throw new Error('Error ao carregar o arquivo JSON rede 6');
                }
                    const data = await response.json();
                        return data;
        } catch (error) {
            console.table('Error ao carregar o dados',error);
        }
    },
    async getJsonDataR7(id){
        try {
            let idInterge = parseInt(id,10);
            let tokenB = localStorage.getItem('token_auth');
            const token = tokenB.replace('"','');
            
            const response = await fetch(`http://localhost/basePolitica21/index.php/api_c/listarRede7?rede=${idInterge}`,{
                method:'GET',
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });
                if(!response){
                    throw new Error('Error ao carregar o arquivo JSON rede 7');
                }
                    const data = await response.json();
                        return data;
        } catch (error) {
            console.table('Error ao carregar o dados',error);
        }
    },
    async getJsonDataRedesGeral(rede,nivel,id){
        try {
            let idInterge = parseInt(id,10);
            let redeInterge = parseInt(rede,10);
            let nivelInterge = parseInt(nivel,10);
            
            console.log(`getJsonDataRedesGeral: id ${idInterge} | rede ${redeInterge} | nivel ${nivelInterge}`);

            let tokenB = localStorage.getItem('token_auth');
            const token = tokenB.replace('"','');
            
            const response = await fetch(`http://localhost/basePolitica21/index.php/api_c/listarRedesGeral?rede=${redeInterge}&nivel=${nivelInterge}&id=${idInterge}&campanha=10`,{
                method:'GET',
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });
                if(!response){
                    throw new Error('Error ao carregar o arquivo JSON rede Geral');
                }
                    const data = await response.json();
                    console.log('redesservice-retonono redesgeral',data);
                        return data;
        } catch (error) {
            console.table('Error ao carregar o dados',error);
        }
    }
}
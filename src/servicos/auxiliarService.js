export default{
    async getJsonEstados(){
        try {
            let tokenB = localStorage.getItem('token_auth');
            const token = tokenB.replace('"','');
            
            const response = await fetch(`http://localhost/basePolitica21/index.php/api_c/listar_estados`,{
                method:'GET',
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });
                if(!response){
                    throw new Error('Error ao carregar o arquivo JSON rede 7');
                }
                    const data = await response.json();
                    console.log('[auxiliarService][getJsonEstados] debug',data);
                        return data;
        } catch (error) {
            console.table('Error ao carregar o dados',error);
        }
    },
    async getJsonMunicipios(uf){
        try {
            let tokenB = localStorage.getItem('token_auth');
            const token = tokenB.replace('"','');
            
            const response = await fetch(`http://localhost/basePolitica21/index.php/api_c/listar_municipios?uf=${uf}`,{
                method:'GET',
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });
                if(!response){
                    throw new Error('Error ao carregar o arquivo JSON rede 7');
                }
                    const data = await response.json();
                    console.log('[auxiliarService][getJsonEstados] debug',data);
                        return data;
        } catch (error) {
            console.table('Error ao carregar o dados',error);
        }
    }
}
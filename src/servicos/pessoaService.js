import jsonRedes from './redes.json'
const servidor_externo = 'http://localhost/basePolitica21/index.php'; 
export default {
    async cadastrarService(dados){
        try {
            let tokenB = localStorage.getItem('token_auth');
                const token = tokenB.replace('"','');
                //formData
                const formDataInserir = new FormData();
                
                let rsId_campanha = localStorage.getItem('usuario_credenciais');
                  let objRsIdCampanha =  JSON.parse(rsId_campanha);
                
                const id_campanha = objRsIdCampanha;
                
                formDataInserir.append('id_campanha',id_campanha);

                formDataInserir.append('nome',dados.nome);
                formDataInserir.append('telefone',dados.telefone);
                formDataInserir.append('email',dados.email);
                formDataInserir.append('dn',dados.dn);
                formDataInserir.append('sexo',dados.sexo);
                //problema com multiplos
                const stringfTags = JSON.stringify(dados.tags);
                formDataInserir.append('tags', stringfTags);
                formDataInserir.append('munic',dados.munic.id);
                formDataInserir.append('bairro',dados.bairro);
                formDataInserir.append('endereco',dados.endereco);
                formDataInserir.append('r1',dados.r1);
                formDataInserir.append('r2',dados.r2);
                formDataInserir.append('r3',dados.r3);
                formDataInserir.append('r4',dados.r4);
                formDataInserir.append('r5',dados.r5);
                formDataInserir.append('r6',dados.r6);
                console.log('[cadastrarService]dados cadastro:',dados);
                    const response = await fetch(`${servidor_externo}/api_c/cadastrarPessoa`,{
                        method:'POST',
                        body:formDataInserir,
                        headers:{
                            'Authorization': `Bearer ${token}`
                        }
                    });
                        if(!response){
                            throw new Error('[pessoaService][cadastrarService][ERROR] error ao executar o fetch');
                        }
                            const data = await response.json();
                                return data;                      

        } catch (error) {
            console.error('[pessoaService][cadastrarService][ERROR] ',error)
        }
    },
    async dadosPessoaService(id,campanha){
        try {
            /*
            { "nome": "asda", "telefone": "99999999999", 
             "email": "asdasdasdggg@gasfdh.com.hg", 
             "dn": "2024-11-26", "sexo": "M", 
             "tags": [ { "value": "asdasd" }, { "value": "asda" }, { "value": "iqwyeu" } ], 
             "uf": { "id": 5, "uf": "distrito federal", "sigla": "df" }, 
             "munic": { "id": 5, "uf": 5, "munic": "brasilia" }, "cep": "72583-500", 
             "bairro": "Asa Norte", "endereco": "Quadra SHCGN 711 Bloco H", 
             "r1": "1", "r2": "4", "r3": "5", "r4": "6", "r5": 0, "r6": 0 }
            */
            let tokenB = localStorage.getItem('token_auth');
                const token = tokenB.replace('"','');
                //formData
                const formDataInserir = new FormData();
                
                let rsId_campanha = localStorage.getItem('usuario_credenciais');
                  let objRsIdCampanha =  JSON.parse(rsId_campanha);
                
                const id_campanha = objRsIdCampanha;
                

                formDataInserir.append('id_campanha',id_campanha);

                formDataInserir.append('id_pessoa',id);

                // console.log('[ResgatarDados]dados cadastro:',dados);
                    const response = await fetch(`${servidor_externo}/api_c/DadosPessoa`,{
                        method:'POST',
                        body:formDataInserir,
                        headers:{
                            'Authorization': `Bearer ${token}`
                        }
                    });
                        if(!response){
                            throw new Error('[pessoaService][dadosPessoaService][ERROR] error ao executar o fetch');
                        }
                            const data = await response.json();
                                return data;                      

        } catch (error) {
            console.error('[pessoaService][dadosPessoaService][ERROR] ',error)
        }
    },
    async atualizarService(dados){
        try {
            let tokenB = localStorage.getItem('token_auth');
                const token = tokenB.replace('"','');
                //formData
                const formDataInserir = new FormData();
                
                let rsId_campanha = localStorage.getItem('usuario_credenciais');
                  let objRsIdCampanha =  JSON.parse(rsId_campanha);
                    const id_campanha = objRsIdCampanha;
                    
                    formDataInserir.append('id_campanha',id_campanha);
                    formDataInserir.append('id_pessoa',dados.id_pessoa);

                    formDataInserir.append('nome',dados.nome);
                    formDataInserir.append('telefone',dados.telefone);
                    formDataInserir.append('email',dados.email);
                    formDataInserir.append('dn',dados.dn);
                    formDataInserir.append('sexo',dados.sexo);
                    //implementar depois
                    const stringfTags = JSON.stringify(dados.tags);
                    formDataInserir.append('tags', stringfTags);
                    formDataInserir.append('munic',JSON.stringify(dados.munic));
                    formDataInserir.append('uf',JSON.stringify(dados.uf));
                    formDataInserir.append('bairro',dados.bairro);
                    formDataInserir.append('endereco',dados.endereco);

                console.log('[pessoaService]dados atualizar:',dados);
                    const response = await fetch(`${servidor_externo}/api_c/atualizarPessoa`,{
                        method:'POST',
                        body:formDataInserir,
                        headers:{
                            'Authorization': `Bearer ${token}`
                        }
                    });
                        if(!response){
                            throw new Error('[pessoaService][atualizarService][ERROR] error ao executar o fetch');
                        }
                            const data = await response.json();
                            
                                return data;                      

        } catch (error) {
            console.error('[pessoaService][atualizarService][ERROR] ',error)
        }
    }

}
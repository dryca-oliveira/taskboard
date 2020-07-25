<template>
<v-container fluid>
    <DIV id="principal">
        <div class="colunas titulo" v-for="title in titles" :key="title">{{title.text}}</div>
        <div class="colunas contetudo" v-for="turno in turnos" :key="turno">{{turno.quadro}}</div>
    </DIV>

</v-container>
</template>

<script>
export default {
    data() {
        return {
            titles: [{
                    text: ""
                },
                {
                    text: "Segunda"
                },
                {
                    text: "Terça"
                },
                {
                    text: "Quarta"
                },
                {
                    text: "Quinta"
                },
                {
                    text: "Sexta"
                },
                {
                    text: "Sábado"
                },
                {
                    text: "Domingo"
                },
            ],

            turnos: [{
                nome: 'manha',
                icone: '',
                tarefa: ["","",""]
            }]
        };
    },
};
</script>

<style>
.colunas {
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px black;

}

.contetudo {
    height: 200px;
}

.titulo {
    background: blue;
}

#principal {
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
}
</style>

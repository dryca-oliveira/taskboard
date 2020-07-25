<template>
<div>

    <img position="left" src="/test2.png" width="400" style="margin-bottom: -250px; margin-left: 60px" />

    <v-card max-width="300" max-height="50" class="mx-auto" color="light-blue darken-2">
        <h1 style="text-align: center;font-family: 'Bangers', cursive; letter-spacing: 5px; color:white">MINHAS ATIVIDADES</h1>

    </v-card>

    <v-container>
        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" absolute dark fab top right color="pink" @click="dialog = !dialog" style="margin-top:45px; margin-right:200px">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
            <span>nova tarefa</span>
        </v-tooltip>

        <v-card color="light-blue lighten-3" elevation="10" class="pb-10 px-1" style="border-top-right-radius:50px;border-top-left-radius:50px;">

            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr class="light-blue ">
                            <th class="text-center " style="border-top-left-radius:50px !important;"></th>
                            <th class="text-center white--text text-h6" style="font-family: 'Viga', sans-serif !important;">SEGUNDA</th>
                            <th class="text-center white--text text-h6" style="font-family: 'Viga', sans-serif !important;">TERÇA</th>
                            <th class="text-center white--text text-h6" style="font-family: 'Viga', sans-serif !important;">QUARTA</th>
                            <th class="text-center white--text text-h6" style="font-family: 'Viga', sans-serif !important;">QUINTA</th>
                            <th class="text-center white--text text-h6" style="font-family: 'Viga', sans-serif !important;">SEXTA</th>
                            <th class="text-center white--text text-h6" style="font-family: 'Viga', sans-serif !important;">SÁBADO</th>
                            <th class="text-center white--text text-h6" style="font-family: 'Viga', sans-serif !important;border-top-right-radius:50px !important;">DOMINGO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in tarefas" :key="item.index">
                            <td class="coluna1">
                                <v-img max-width="150" :src="item.icone"></v-img>
                                <h3>{{item.titulo}}</h3>
                            </td>

                            <td class="px-1">
                                <v-list-item class="px-1">
                                    <v-list-item-content>
                                        <v-list-item-title v-for="atividade in item.seg" :key="atividade.index" class="width-20">
                                            <v-chip class="ma-2" close color="teal accent-3" text-color="dark" @click:close="fechar(atividade.index, item.index, 'seg')">
                                                <strong> {{ atividade.tarefa }} </strong>
                                            </v-chip>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                            </td>

                            <td class="px-1">
                                <v-list-item class="px-1">
                                    <v-list-item-content>
                                        <v-list-item-title v-for="atividade in item.ter" :key="atividade.index">
                                            <v-chip class="ma-2" close color="teal accent-3" text-color="dark" @click:close="fechar(atividade.index, item.index, 'ter')">
                                                <strong> {{ atividade.tarefa }} </strong>
                                            </v-chip>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </td>

                            <td class="px-1">
                                <v-list-item class="px-1">
                                    <v-list-item-content>
                                        <v-list-item-title v-for="atividade in item.qua" :key="atividade.index">
                                            <v-chip class="ma-2" close color="teal accent-3" text-color="dark" @click:close="fechar(atividade.index, item.index, 'qua')">
                                                <strong> {{ atividade.tarefa }} </strong>
                                            </v-chip>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </td>
                            <td class="px-1">
                                <v-list-item class="px-1">
                                    <v-list-item-content>
                                        <v-list-item-title v-for="atividade in item.qui" :key="atividade.index">
                                            <v-chip class="ma-2" close color="teal accent-3" text-color="dark" @click:close="fechar(atividade.index, item.index, 'qui')">
                                                <strong> {{ atividade.tarefa }} </strong>
                                            </v-chip>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </td>
                            <td class="px-1">
                                <v-list-item class="px-1">
                                    <v-list-item-content>
                                        <v-list-item-title v-for="atividade in item.sex" :key="atividade.index">
                                            <v-chip class="ma-2" close color="teal accent-3" text-color="dark" @click:close="fechar(atividade.index, item.index, 'sex')">
                                                <strong> {{ atividade.tarefa }} </strong>
                                            </v-chip>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </td>
                            <td class="px-1">
                                <v-list-item class="px-1">
                                    <v-list-item-content>
                                        <v-list-item-title v-for="atividade in item.sab" :key="atividade.index">
                                            <v-chip class="ma-2" close color="teal accent-3" text-color="dark" @click:close="fechar(atividade.index, item.index, 'sab')">
                                                <strong> {{ atividade.tarefa }} </strong>
                                            </v-chip>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </td>
                            <td class="px-1">
                                <v-list-item class="px-1">
                                    <v-list-item-content>
                                        <v-list-item-title v-for="atividade in item.dom" :key="atividade.index">
                                            <v-chip class="ma-2" close color="teal accent-3" text-color="dark" @click:close="fechar(atividade.index, item.index, 'dom')">
                                                <strong> {{ atividade.tarefa }} </strong>
                                            </v-chip>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card>

        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" xl="12" sm="12" md="12" lg="12" class="pt-10 pb-0">
                            <v-text-field v-model="form.atividade" label="Atividade" outlined></v-text-field>
                        </v-col>
                        <v-col cols="12" xl="12" sm="12" md="6" lg="6" class="pt-0 pb-0">
                            <v-select v-model="form.dia" :items="items" label="Dia da Semana" outlined></v-select>
                        </v-col>
                        <v-col cols="12" xl="12" sm="12" md="6" lg="6" class="pt-0 pb-0">
                            <v-select v-model="form.turno" :items="items1" label="Turno" outlined></v-select>
                        </v-col>
                        <v-col>
                            <v-alert v-show="alerta" dense outlined type="error">
                                Este dia já está cheio de atividades. Escolha outro dia.
                            </v-alert>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="error" @click="cancelar">Cancelar</v-btn>
                    <v-btn text color="primary" @click="addTarefa">Salvar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
    <img position="left" src="/menino.png" width="400" style="margin-top: -250px; margin-left: 10px" />
</div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            alerta: false,
            chip2: true,
            items: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
            items1: ['Manhã', 'Tarde', 'Noite'],
            tarefas: [{
                    index: 0,
                    icone: '/manha.png',
                    titulo: 'Manhã',
                    seg: [],
                    ter: [],
                    qua: [],
                    qui: [],
                    sex: [],
                    sab: [],
                    dom: [],

                },
                {
                    index: 1,
                    icone: '/sol.png',
                    titulo: 'Tarde',
                    seg: [],
                    ter: [],
                    qua: [],
                    qui: [],
                    sex: [],
                    sab: [],
                    dom: [],

                },
                {
                    index: 2,
                    icone: '/lua.png',
                    titulo: 'Noite',
                    seg: [],
                    ter: [],
                    qua: [],
                    qui: [],
                    sex: [],
                    sab: [],
                    dom: [],

                }

            ],
            form: {
                atividade: '',
                dia: '',
                turno: ''
            },

        }
    },
    methods: {
        addTarefa() {

            switch (this.form.turno) {
                case "Manhã":
                    switch (this.form.dia) {
                        case "seg":
                            if (this.tarefas[0].seg.length <= 2) {
                                var id = this.tarefas[0].seg.length;
                                this.tarefas[0].seg.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return
                            }
                            break
                        case "ter":
                            if (this.tarefas[0].ter.length <= 2) {
                                var id = this.tarefas[0].ter.length;
                                this.tarefas[0].ter.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return
                            }
                            break
                        case "qua":
                            if (this.tarefas[0].qua.length <= 2) {
                                var id = this.tarefas[0].qua.length;
                                this.tarefas[0].qua.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return

                            }
                            break
                        case "qui":
                            if (this.tarefas[0].qui.length <= 2) {
                                var id = this.tarefas[0].qui.length;
                                this.tarefas[0].qui.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return

                            }
                            break
                        case "sex":
                            if (this.tarefas[0].sex.length <= 2) {
                                var id = this.tarefas[0].sex.length;
                                this.tarefas[0].sex.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return

                            }
                            break
                        case "sab":
                            if (this.tarefas[0].sab.length <= 2) {
                                var id = this.tarefas[0].sab.length;
                                this.tarefas[0].sab.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return

                            }
                            break
                        case "dom":
                            if (this.tarefas[0].dom.length <= 2) {
                                var id = this.tarefas[0].dom.length;
                                this.tarefas[0].dom.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return

                            }
                            break
                    }
                    break;
                case "Tarde":
                    switch (this.form.dia) {
                        case "seg":
                            if (this.tarefas[1].seg.length <= 2) {
                                var id = this.tarefas[1].seg.length;
                                this.tarefas[1].seg.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return
                            }
                            break

                        case "ter":
                            if (this.tarefas[1].ter.length <= 2) {
                                var id = this.tarefas[1].ter.length;
                                this.tarefas[1].ter.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return
                            }
                            break
                        case "qua":
                            if (this.tarefas[1].qua.length <= 2) {
                                var id = this.tarefas[1].qua.length;
                                this.tarefas[1].qua.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return
                            }
                            break
                        case "qui":
                            if (this.tarefas[1].qui.length <= 2) {
                                var id = this.tarefas[1].qui.length;
                                this.tarefas[1].qui.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return
                            }
                            break
                        case "sex":
                            if (this.tarefas[1].sex.length <= 2) {
                                var id = this.tarefas[1].sex.length;
                                this.tarefas[1].sex.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return
                            }
                            break
                        case "sab":
                            if (this.tarefas[1].sab.length <= 2) {
                                var id = this.tarefas[1].sab.length;
                                this.tarefas[1].sab.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return
                            }
                            break
                        case "dom":
                            if (this.tarefas[1].dom.length <= 2) {
                                var id = this.tarefas[1].dom.length;
                                this.tarefas[1].dom.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return
                            }
                            break
                    }
                    break;
                case "Noite":
                    switch (this.form.dia) {
                        case "seg":
                            if (this.tarefas[2].seg.length <= 2) {
                                var id = this.tarefas[2].seg.length;
                                this.tarefas[2].seg.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return
                            }
                            break
                        case "ter":
                            if (this.tarefas[2].ter.length <= 2) {
                                var id = this.tarefas[2].ter.length;
                                this.tarefas[2].ter.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return
                            }
                            break
                        case "qua":
                            if (this.tarefas[2].qua.length <= 2) {
                                var id = this.tarefas[2].qua.length;
                                this.tarefas[2].qua.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return
                            }
                            break
                        case "qui":
                            if (this.tarefas[2].qui.length <= 2) {
                                var id = this.tarefas[2].qui.length;
                                this.tarefas[2].qui.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return
                            }
                            break
                        case "sex":
                            if (this.tarefas[2].sex.length <= 2) {
                                var id = this.tarefas[2].sex.length;
                                this.tarefas[2].sex.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return
                            }
                            break
                        case "sab":
                            if (this.tarefas[2].sab.length <= 2) {
                                var id = this.tarefas[2].sab.length;
                                this.tarefas[2].sab.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return
                            }
                            break
                        case "dom":
                            if (this.tarefas[2].dom.length <= 2) {
                                var id = this.tarefas[2].dom.length;
                                this.tarefas[2].dom.push({
                                    index: id,
                                    tarefa: this.form.atividade
                                })
                            } else {
                                this.alerta = true
                                return
                            }
                            break
                    }
                    break;

            }
            this.form.atividade = ""
            this.form.dia = ""
            this.form.turno = ""
            this.dialog = false
        },
        cancelar() {
            this.form.atividade = ""
            this.form.dia = ""
            this.form.turno = ""
            this.dialog = false
        },
        fechar(index, indexTarefa, dia) {

            if (dia === 'seg') {
                var position = this.tarefas[indexTarefa].seg.indexOf(index)
                this.tarefas[indexTarefa].seg.splice(position, 1);
            } else if (dia === 'ter') {
                var position = this.tarefas[indexTarefa].ter.indexOf(index)
                this.tarefas[indexTarefa].ter.splice(position, 1);
            } else if (dia === 'qua') {
                var position = this.tarefas[indexTarefa].qua.indexOf(index)
                this.tarefas[indexTarefa].qua.splice(position, 1);
            } else if (dia === 'qui') {
                var position = this.tarefas[indexTarefa].qui.indexOf(index)
                this.tarefas[indexTarefa].qui.splice(position, 1);
            } else if (dia === 'sex') {
                var position = this.tarefas[indexTarefa].sex.indexOf(index)
                this.tarefas[indexTarefa].sex.splice(position, 1);
            } else if (dia === 'sab') {
                var position = this.tarefas[indexTarefa].sab.indexOf(index)
                this.tarefas[indexTarefa].sab.splice(position, 1);
            } else if (dia === 'dom') {
                var position = this.tarefas[indexTarefa].dom.indexOf(index)
                this.tarefas[indexTarefa].dom.splice(position, 1);
            }


        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Viga&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');

.coluna1 {
    padding-left: 15px !important;
    padding-right: 0px !important;
    width: 10%;
    background-color: #7E57C2;
}

#fonte {
    font-family: 'Viga', sans-serif !important;

}

h3 {
    text-align: center;
    padding: 10px 0px 5px;
    text-transform: uppercase
}
</style>

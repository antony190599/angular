import { Component, OnInit } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { title } from "process";
@Component({
    selector: 'app-addTask',
    templateUrl: './add.component.html',
    styleUrl: './add.component.scss'

})

export class AddComponent implements OnInit{

    constructor(private fb: FormBuilder){}

    form!: FormGroup;

    ngOnInit(): void {
        this.form = this.fb.group({
            title: new FormControl('', [Validators.required, Validators.maxLength(10)])
        })
    }

    sendTaskTitle(): void{
        if(this.form.valid){
            console.log(this.form.value.title)
        }
    }

    // constructor(private form: NgForm)[]

    numberTasks: number = 10
    titleTask: string = ''
    activeButton: boolean = true

    sendData(form:NgForm){
        if{form.valid}{
            console.log(this.titleTask)
        }
    }

    sendTask(){
        const sizeTitleTask = this.titleTask.split('')
        if(sizeTitleTask.length > 0){
            this.activeButton = false
        }else{
            this.activeButton = true
        }
        console.log('Tarea enviada con exito! $(this.titleTask}')
    
    }
}

    //constructor(){
      //  console.log("Creandose desde el constructor")
    //}

    //ngOnInit(): void {
      //  console.log("Creandose desde el ng n Init")
    //}
    // ngOnDestroy(): void {
    //     console.log("El componente add ha sido destruido")
    // }
    // ngAfterContentInit(): void {
    //     console.log("El contenido proyectado ha sido inicializado")
    // }

export enum RoutePath{
    START='/',
    LOGIN='/login',
    FORMUSER='/formusuario',
    ADMINST = '/instituicoes',
    STUDENT = '/alunos',
    USERS = "/usuarios",
    DASHBOARD = "/dashboard",
    FORMINST='/forminstituicao',
    INSTUP='/forminstituicao/:id',
    CREATEUSER='/createuser',
    DETAILSINST="/instituicao/detalhes/:id",
    FORMSTUD='/formaluno',
    STUDUP='/formaluno/:id',
    DETAILSSTUD='/alunos/detalhes/:id',
    DETAILSUSER='/usuarios/detalhes/:id',
    USERUP = 'formusuario/:id',
    MAILUSER = 'criarusuario/:id'
}
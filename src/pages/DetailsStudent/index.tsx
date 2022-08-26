import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { StudentComplete } from "types/StudentFindOne";
import { studentService } from "../../services/studentService";
import * as S from "./style";
import Loading from "../../components/Loading";
const DetailsStudent = () => {
  
  const navigate = useNavigate();
  const { id } = useParams();
  const [showLoading, setShowLoading] = useState(true);
  const [aluno, setAluno] = useState<StudentComplete>();

  const getOneStudent = async () => {

    if (id) {
      const get = await studentService.oneStudent(id);
      setAluno(get?.data);
    }
    setShowLoading(false);
  };
  useEffect(() => {
    getOneStudent();

  }, []);
  return (
    <S.background>
      <S.heading>
        <S.iconConfig>
          <p>
            Coluna
            <img />
            Reta
          </p>
        </S.iconConfig>
        <S.logins>
          <BiArrowBack
            cursor="pointer"
            size={30}
            onClick={() => navigate("/alunos")}
          />
        </S.logins>
      </S.heading>
      {!showLoading?
     <S.content>
      <S.divMain>
        <S.Title>{aluno?.name}</S.Title>
        <S.divButtons>
          
        <S.buttonEdit onClick={()=> navigate(`/formaluno/${id}`)}>
          Editar
        </S.buttonEdit>

        </S.divButtons>
        <S.Details>Detalhes</S.Details>
        <S.titleInfo><p>Nome</p><p>Data Nasc</p><p>Telefone</p><p>Instituição</p></S.titleInfo>
         <S.cardDetails>
          <S.uniqueCard>{aluno?.name}</S.uniqueCard>
          <S.uniqueCard>{aluno?.age}</S.uniqueCard>
          <S.uniqueCard>{aluno?.phone}</S.uniqueCard>
          <S.uniqueCard>{aluno?.institution.name}</S.uniqueCard>
         </S.cardDetails>

         <S.Details>
          Acompanhamento
         </S.Details>
         <S.titleInfo><p>Histórico</p></S.titleInfo>
         <S.cardDetailsConsult>
          {aluno?.followUp?.map((student, index)=>(
            <div key={index}>
              <div>consulta do dia:{student.startDate}</div>
              <S.firstPhoto src={student.firstPhoto}/>

            </div>
          ))}
         </S.cardDetailsConsult>
      </S.divMain>
     </S.content>
     :""}
     {showLoading?
         <Loading/>
      :""}
    </S.background>
  );
};

export default DetailsStudent;

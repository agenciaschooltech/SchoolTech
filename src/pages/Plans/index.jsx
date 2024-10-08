import PlanCard from "../../components/PlanCard";
import { checkLoginState } from "../../utils/helpers";
import "./styles.scss";

function Plans() {
  return (
    <div className="plans-container">
      <div className="desc-plan">
        <h2>Confira os nossos planos para ter acesso a todo conteúdo</h2>
        <p>
          Temos alguns planos para acesso a plataforma, o plano <b>bom</b> te da
          acesso a todos os cursos de programação gravados na plataforma, o
          plano <b>ótimo</b> também da acesso a todo o conteúdo porém você ganha
          3 horas de mentoria com o professor, o plano <b>completo</b> tem
          acesso a todo o conteúdo e mentorias a vontade o mês inteiro!
        </p>
      </div>
      <div className="plans-cards">
        <PlanCard
          textTitle="Bom"
          descPlan="Acesso completo dos cursos gravados"
          textPay="R$30 | Mensal"
        />

        <div className="card-complete">
          <PlanCard
            backgroundColorCard="rgb(235, 52, 52)"
            backgroundColorBtn="rgb(207, 29, 29)"
            textTitle="Completo"
            descPlan="Acesso completo dos cursos gravados + mentoria ilimitada"
            textPay="R$250 | Mensal"
          />
        </div>

        <PlanCard
          backgroundColorCard="rgb(180, 29, 191)"
          backgroundColorBtn="rgb(135, 21, 143)"
          textTitle="Ótimo"
          textPay="R$100 | Mensal"
          descPlan="Acesso completo dos cursos gravados + 3 horas de mentorias"
          onPlan={(e) => checkLoginState(e)}
        />
      </div>
    </div>
  );
}

export default Plans;

import { getPayload } from 'payload';
import config from '@payload-config';
import LegalPageLayout from '@/components/shared/LegalPageLayout';
import { richTextToHtml } from '@/lib/richTextToHtml';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Crias na Floresta',
  description: 'Política de Privacidade da Crias na Floresta. Como tratamos e protegemos os seus dados pessoais.',
  robots: {
    index: false,
    follow: true,
  },
};

export default async function PoliticaDePrivacidade() {
  const payload = await getPayload({ config });

  const legalPages = await payload.findGlobal({
    // @ts-ignore - Global types not yet generated
    slug: 'legal-pages',
  });

  const title = (legalPages as any)?.privacidadeTitle || 'Política de Privacidade';
  const content =
    richTextToHtml((legalPages as any)?.privacidadeContent) ||
    `<p>A Crias na Floresta está empenhada em proteger a privacidade de todos os utilizadores do seu website e por isso, elaborou a presente Política de Privacidade como um compromisso pelo respeito da informação pessoal dos seus utilizadores, demonstração de boas práticas relativas à proteção das informações pessoais e de segurança, conforme descrito abaixo.</p>

    <p>Deve ler a presente Política de Privacidade cuidadosamente. Ao aceder ao website da Crias na Floresta, estará a disponibilizar os seus Dados Pessoais, o que implica o conhecimento e aceitação das condições aqui constantes, estando a autorizar a recolha e tratamento destes dados de acordo com as regras aqui definidas.</p>

    <p>A Crias na Floresta esclarece que a simples navegação ou acesso ao website não implica a recolha dos seus Dados Pessoais ou cookies. No entanto, o website também utiliza cookies, pelo que dispõe de uma Política de Cookies, a qual deverá consultar.</p>

    <h2 class="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">1. Dados Pessoais</h2>

    <p>Os Dados Pessoais são toda e qualquer informação de qualquer natureza e independente do respetivo suporte, relacionada com uma pessoa singular identificada ou passível de ser identificada.</p>

    <p>Considera-se que uma pessoa singular que possa ser identificada, direta ou indiretamente, especialmente por referência a um identificador como um nome, número de identificação, dados de localização, identificadores por via eletrónica ou outros elementos específicos da identidade física, fisiológica, genética, mental, económica, cultural ou social, é passível de ser identificada.</p>

    <p>Através deste website e conforme a finalidade referida infra, poderão ser recolhidos os seguintes Dados Pessoais: (i) nome, (ii) data de nascimento, (iii) dados de contacto (telefone e e-mail), (iv) empresa representada e (v) informação necessária e relevante para a avaliação da aptidão de candidatos e colaboradores da Crias na Floresta, como por exemplo, a experiência profissional, habilitações académicas (em conjunto, os "Dados Pessoais").</p>

    <h2 class="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">2. Responsável pelo tratamento dos Dados Pessoais</h2>

    <p>A entidade responsável pela recolha e tratamento dos Dados Pessoais para as finalidades referidas infra é a Crias na Floresta.</p>

    <p>Caso entenda que alguma informação constante da presente Política de Privacidade não esteja clara e transparente ou, por qualquer motivo que considere pertinente, poderá entrar em contacto connosco através do endereço de correio eletrónico seguinte: criasnafloresta@gmail.com.</p>

    <h2 class="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">3. Finalidade do tratamento de Dados Pessoais</h2>

    <p>A recolha e tratamento dos Dados Pessoais no website destina-se ao: (i) envio, após solicitação pelo utilizador, de informação sobre os serviços oferecidos e (ii) inscrição nas atividades propostas (em conjunto, as "Finalidades"), pelo que o preenchimento do formulário correspondente a cada uma das Finalidades corresponde ao consentimento expresso e prévio ao tratamento dos Dados Pessoais fornecidos.</p>

    <p>Caso o utilizador consinta expressa e previamente o tratamento dos seus Dados Pessoais, a Crias na Floresta compromete-se a proceder ao tratamento dos Dados Pessoais na medida e pelo tempo necessário à concretização das Finalidades.</p>

    <p>Neste sentido, a Crias na Floresta não solicita nem encoraja o envio de Dados Pessoais referentes a convicções filosóficas ou políticas, filiação partidária ou sindical, fé religiosa, vida privada e origem racial ou étnica, bem como o tratamento de dados relativos à saúde e à vida sexual, incluindo os dados genéticos, pelo que, caso os forneça à Crias na Floresta, esta não poderá ser responsabilizada pelo seu tratamento ao abrigo da Política de Privacidade.</p>

    <p>Sem prejuízo de outras formas de contacto com a Crias na Floresta, o não fornecimento dos Dados Pessoais pelo utilizador, impede a Crias na Floresta de o considerar para efeitos de envio de informação/inscrições ou outras informações, consoante a situação aplicável.</p>

    <h2 class="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">4. Conservação dos Dados Pessoais</h2>

    <p>O período de tempo durante o qual os Dados Pessoais são armazenados e conservados varia de acordo com as Finalidades.</p>

    <p>Assim, os Dados Pessoais tratados para pedido de informação poderão ser mantidos durante o período necessário ao cumprimento da finalidade. Os Dados Pessoais tratados para a finalidade de resposta a pedidos de informação e/ou inscrições serão guardados pelo período de 1 (um ano) após o último contacto com o titular dos Dados Pessoais, sem prejuízo de poderem ser praticados prazos mais alargados quando a situação o justifique (e proporcionais a tal situação), nomeadamente para salvaguarda de direitos da Crias na Floresta.</p>

    <h2 class="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">5. Direito de acesso, retificação, eliminação, limitação do tratamento e direito de portabilidade dos Dados Pessoais</h2>

    <p>Encontra-se garantido ao utilizador, a qualquer momento, o direito de acesso aos seus Dados Pessoais, bem como a respetiva retificação, apagamento, portabilidade, limitação e/ou oposição ao tratamento– neste sentido, poderá exercer qualquer destes direitos dirigindo-se, por escrito à Crias na Floresta, utilizando a morada da sede ou através do seguinte correio eletrónico criasnafloresta@gmail.com .</p>

    <p>Sem prejuízo do acima disposto, o utilizador terá sempre o direito de apresentar as reclamações que entender junto da autoridade com competência para o efeito.</p>

    <h2 class="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">6. Segurança no Tratamento de Dados Pessoais</h2>

    <p>Os Dados Pessoais serão processados e armazenados informaticamente e em suporte de papel.</p>

    <p>A Crias na Floresta assume o compromisso de garantir a segurança e proteção dos Dados Pessoais que nos envia através do website, tendo adotado as medidas técnicas e organizativas adequadas ao efeito, nomeadamente: (i) proteção com passwords, (ii) utilização de certificados digitais, (iii) firewalls, (v)comunicação segura via protocolo https. A Crias na Floresta informa que as referidas medidas de segurança são revistas e atualizadas consoante as necessidades e o estado de arte nestas matérias.</p>

    <p>Caso, por algum motivo, se verifique uma violação da segurança que provoque, de modo acidental ou ilícito, a destruição, a perda, a alteração, a divulgação ou o acesso, não autorizados, aos Dados Pessoais, a Crias na Floresta comunicará sem demora justificada e, sempre que possível, até 72 horas após ter tido conhecimento da mesma e nos termos da legislação aplicável, tal facto às autoridades competentes. Da mesma forma, a Crias na Floresta comunica a violação dos Dados Pessoais ao respetivo titular dos Dados Pessoais, nos termos da legislação aplicável.</p>

    <p>Não obstante as medidas de segurança adotadas pela Crias na Floresta, alertamos os utilizadores que deverão adotar medidas adicionais de segurança designadamente, assegurar a existência de uma firewall ativa, e antivírus e anti-spyware actualizados.</p>

    <h2 class="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">7. Comunicação dos Dados Pessoais a Entidades Terceiras</h2>

    <p>A Crias na Floresta, no âmbito da sua atividade, poderá recorrer a terceiros para a prestação de determinados serviços. Tais terceiros poderão estar localizados dentro ou fora da União Europeia. Por vezes, a prestação destes serviços implica o acesso, por estas entidades, a Dados Pessoais dos utilizadores.</p>

    <p>Quando tal sucede, a Crias na Floresta toma as medidas adequadas, de forma a assegurar que as entidades que tenham acesso aos Dados Pessoais, são reputadas e oferecem elevadas garantias a este nível, o que ficará devidamente consagrado e acautelado em contrato a celebrar, por escrito, entre a Crias na Floresta e a(s) terceira(s) entidade(s).</p>

    <p>Assim, qualquer entidade subcontratada pela Crias na Floresta tratará os Dados Pessoais dos utilizadores, em nome e por conta da Crias na Floresta na obrigação de adotar as medidas técnicas e organizacionais necessárias de forma a proteger os Dados Pessoais contra a destruição, acidental ou ilícita, a perda acidental, a alteração, a difusão ou o acesso não autorizado e contra qualquer outra forma de tratamento ilícito.</p>

    <p>Em qualquer dos casos, a Crias na Floresta permanece responsável pelo tratamento dos Dados Pessoais.</p>

    <p>Quando necessário no âmbito da contratação de terceiros pela Crias na Floresta, os Dados Pessoais poderão ser transferidos para fora da União Europeia, nos termos e condições permitidos pela legislação aplicável.</p>

    <h2 class="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">8. Acesso a websites de terceiros</h2>

    <p>A Política de Privacidade não é aplicável a websites de terceiros, pelo que, caso visite outro website a partir deste deverá sempre ler a política de privacidade desse website e verificar se concorda com os seus termos antes de fornecer os seus dados.</p>

    <p>A Crias na Floresta não se responsabiliza pela política de privacidade, nem pelos conteúdos disponibilizados nos websites de terceiros.</p>

    <h2 class="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">9. Alterações à Política de Privacidade</h2>

    <p>A Crias na Floresta reserva-se o direito de, a qualquer altura, proceder a reajustamentos ou alterações à presente Política de Privacidade, sendo essas alterações devidamente publicadas no presente website. A versão publicada website é a que se encontra atualmente em vigor.</p>`;

  return <LegalPageLayout title={title} content={content} />;
}

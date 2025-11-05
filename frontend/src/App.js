function App() {
  return (
    <div style={{padding: 20}}>
      <h1>SAST CI/CD Pipeline Dashboard</h1>
      <h2>Status do Pipeline</h2>
      <img src="https://github.com/MarcioGil/Sast-CI-CD-Pipeline/actions/workflows/security-scan.yml/badge.svg" alt="Status do Pipeline"/>
      <h2>Resultados Visuais</h2>
      <div>
        <h3>Workflow Falhou</h3>
        <img src="/screenshot-falha.png" alt="Workflow Falhou" width="400"/>
        <h3>Workflow Sucesso</h3>
        <img src="/success.jpg" alt="Workflow Sucesso" width="400"/>
      </div>
      <h2>Demonstração em Vídeo</h2>
      <video src="/demo.mp4" controls width="400"/>
      <h2>Vulnerabilidades Detectadas</h2>
      <div style={{background: '#ffecec', padding: 10, margin: 10, borderRadius: 8}}>
        <strong>SQL Injection:</strong> Possível manipulação de dados e acesso não autorizado ao banco de dados.<br/>
        <strong>Segredo hardcoded:</strong> Exposição de chave de API em ambiente público.
      </div>
      <h2>Impacto</h2>
      <p>
        Essa abordagem previne a dívida de cibersegurança e economiza o alto custo de remediação de falhas em produção, conectando a segurança diretamente à economia de custos da empresa.
      </p>
    </div>
  );
}
export default App;
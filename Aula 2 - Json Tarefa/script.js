document.addEventListener('DOMContentLoaded', function() {
    const formularioTarefa = document.getElementById('formularioTarefa');
    const entradaTarefa = document.getElementById('entradaTarefa');
    const listaDeTarefas = document.getElementById('listaDeTarefas');
    let tarefas = [];

    function renderizarTarefas() {
      listaDeTarefas.innerHTML = '';
      tarefas.forEach((tarefa, indice) => {
        const li = document.createElement('li');
        li.textContent = tarefa;

        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';
        botaoEditar.addEventListener('click', () => {
          const novoNome = prompt('Digite o novo nome da tarefa:', tarefa);
          if (novoNome !== null) {
            tarefas[indice] = novoNome;
            renderizarTarefas();
          }
        });

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.addEventListener('click', () => {
          tarefas.splice(indice, 1);
          renderizarTarefas();
        });

        li.appendChild(botaoEditar);
        li.appendChild(botaoExcluir);
        listaDeTarefas.appendChild(li);
      });
    }

    formularioTarefa.addEventListener('submit', function(evento) {
      evento.preventDefault();
      const novaTarefa = entradaTarefa.value.trim();
      if (novaTarefa !== '') {
        tarefas.push(novaTarefa);
        renderizarTarefas();
        entradaTarefa.value = '';
      }
    });
  });
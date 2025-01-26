import React from 'react';
import styles from './NewProject.module.css'
import ProjectForm from '../Projects/ProjectForm';

function NewProject() {
    return(
        <div className={styles.container_project}>
            <h1>Criar projeto</h1>
            <p>Crie o seu projeto agora para depois adicionar os serviços.</p>
              <ProjectForm />

        </div>
    )
}
export default NewProject;
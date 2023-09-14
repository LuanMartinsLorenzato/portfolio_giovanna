import { firestore }from '../../shared/services/firebase'
import { collection, getDocs } from "firebase/firestore";
import { ProjectsType } from '../utils/types'

class ProjectsService {
	collectioName: string;

	constructor(collectionName: string) {
		this.collectioName = collectionName;
	}
	
	async getProjectsByCollection(): Promise<ProjectsType[]> {
		try {
			const response: ProjectsType[] = [];
			const querySnapshot = await getDocs(collection(firestore, this.collectioName));
	
			querySnapshot.forEach((doc) => {
				const docData = doc.data() as ProjectsType;
				if (docData) {
					response.push(docData);
				}
			});
			return response;
		} catch (error) {
			console.error("Erro ao ler documentos: ", error);
			throw error;
		}
	}
}

export default ProjectsService;
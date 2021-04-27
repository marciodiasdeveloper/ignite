import fs from 'fs';
import csvParse from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];
            
            const parseFile = csvParse();
    
            stream.pipe(parseFile);
    
            parseFile
            .on("data", async (line) => {
                const [name, description] = line;
                categories.push({
                    name,
                    description
                });
            }).on("end", () => {
                resolve(categories);
            });
        });
    }

    execute(file: Express.Multer.File): void {
        const categories = this.loadCategories(file);
    }
}

export { ImportCategoryUseCase };
const { LANGUAGES_CONFIG } = require('./language.config');

describe('Kotlin Language Support', () => {
    it('should compile Kotlin file correctly', () => {
        const kotlinConfig = LANGUAGES_CONFIG['KOTLIN'];
        expect(kotlinConfig).toBeDefined(); 

        const compileCommand = kotlinConfig.compile;
        expect(compileCommand).toEqual('kotlinc solution.kt -include-runtime -d solution.jar'); 
    });

    it('should run Kotlin JAR file correctly', () => {
        const kotlinConfig = LANGUAGES_CONFIG['KOTLIN'];
        expect(kotlinConfig).toBeDefined(); 

        const runCommand = kotlinConfig.run;
        expect(runCommand).toEqual('java -jar solution.jar'); 
    });

    it('should have correct timeout, filename, and memory settings', () => {
        const kotlinConfig = LANGUAGES_CONFIG['KOTLIN'];
        expect(kotlinConfig).toBeDefined();
 
        expect(kotlinConfig.timeout).toEqual(5); 
        expect(kotlinConfig.filename).toEqual('solution.kt'); 
        expect(kotlinConfig.memory).toEqual(512 * 1024); 
    });
});

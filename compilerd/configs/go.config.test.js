const { LANGUAGES_CONFIG } = require('./language.config'); 

describe('Go Language Support', () => {
    it('should compile Go file correctly', () => {
        const goConfig = LANGUAGES_CONFIG['GO'];
        expect(goConfig).toBeDefined(); 
        
        const compileCommand = goConfig.compile;
        expect(compileCommand).toEqual('go build -o solution solution.go'); 
    });

    it('should run Go executable correctly', () => {
        const goConfig = LANGUAGES_CONFIG['GO'];
        expect(goConfig).toBeDefined(); 

        const runCommand = goConfig.run;
        expect(runCommand).toEqual('./solution'); 
    });

    it('should have correct timeout, filename, and memory settings', () => {
        const goConfig = LANGUAGES_CONFIG['GO'];
        expect(goConfig).toBeDefined(); 
 
        expect(goConfig.timeout).toEqual(5); 
        expect(goConfig.filename).toEqual('solution.go');
        expect(goConfig.memory).toEqual(512 * 1024); 
    });
});

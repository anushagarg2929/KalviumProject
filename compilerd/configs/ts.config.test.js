const { LANGUAGES_CONFIG } = require('./language.config'); 

describe('TypeScript Support', () => {
    it('should compile TypeScript file correctly', () => {
        const tsConfig = LANGUAGES_CONFIG['TS'];
        expect(tsConfig).toBeDefined(); 
        
        
        const compileCommand = tsConfig.compile;
        expect(compileCommand).toEqual('tsc solution.ts'); 
    });

    it('should run compiled JavaScript file correctly', () => {
        const tsConfig = LANGUAGES_CONFIG['TS'];
        expect(tsConfig).toBeDefined(); 
        
       
        const runCommand = tsConfig.run;
        expect(runCommand).toEqual('node solution.js'); 
    });

    it('should have correct timeout, filename, and memory settings', () => {
        const tsConfig = LANGUAGES_CONFIG['TS'];
        expect(tsConfig).toBeDefined(); 
        
        
        expect(tsConfig.timeout).toEqual(10); 
        expect(tsConfig.filename).toEqual('solution.ts'); 
        expect(tsConfig.memory).toEqual(512 * 1024); 
    });
});

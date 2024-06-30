//I have added a test case for token count

const { LANGUAGES_CONFIG } = require('./language.config'); 

describe('Programming Language Support Configuration', () => {
    // Test cases for C language
    describe('C Language', () => {
        it('should handle spaces in C filename', () => {
            const config = LANGUAGES_CONFIG['C'];
            expect(config).toBeDefined();
            
            const filenameWithSpaces = 'solution with spaces.c';
            const expectedCompileCommand = `gcc -o a.out "${filenameWithSpaces}"`;
            expect(config.compile).toEqual(expectedCompileCommand);
        });

        it('should handle spaces in C run command', () => {
            const config = LANGUAGES_CONFIG['C'];
            expect(config).toBeDefined();

            const filenameWithSpaces = 'solution with spaces.c';
            const expectedRunCommand = `"./a.out" "${filenameWithSpaces}"`;
            expect(config.run).toEqual(expectedRunCommand);
        });

    });

    describe('Token Testing Configuration', () => {
        it('should configure token testing for PROMPTV1', () => {
            const config = LANGUAGES_CONFIG['PROMPTV1'];
            expect(config).toBeDefined();
            expect(config.model).toEqual('gpt-4-1106-preview');
        });

        it('should configure token testing for PROMPTV2', () => {
            const config = LANGUAGES_CONFIG['PROMPTV2'];
            expect(config).toBeDefined();
            expect(config.model).toEqual('gpt-3.5-turbo-1106');
        });
    });

    describe('General Configuration Checks', () => {
        it('should ensure all languages have defined configurations', () => {
            const allLanguages = Object.keys(LANGUAGES_CONFIG);
            allLanguages.forEach(lang => {
                expect(LANGUAGES_CONFIG[lang]).toBeDefined();
            });
        });

        it('should ensure timeout values are defined and reasonable', () => {
            const allLanguages = Object.keys(LANGUAGES_CONFIG);
            allLanguages.forEach(lang => {
                const config = LANGUAGES_CONFIG[lang];
                expect(config.timeout).toBeDefined();
                expect(config.timeout).toBeGreaterThanOrEqual(1); 
                expect(config.timeout).toBeLessThanOrEqual(10);
            });
        });

        it('should ensure memory values are defined and reasonable', () => {
            const allLanguages = Object.keys(LANGUAGES_CONFIG);
            allLanguages.forEach(lang => {
                const config = LANGUAGES_CONFIG[lang];
                expect(config.memory).toBeDefined();
                expect(config.memory).toBeGreaterThanOrEqual(0);
                expect(config.memory).toBeLessThanOrEqual(1024 * 1024); 
            });
        });
    });
});

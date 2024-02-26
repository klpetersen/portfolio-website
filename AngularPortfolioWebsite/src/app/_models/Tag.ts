export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'darkred');
    static readonly TYPESCRIPT = new Tag('Typescript', 'purple');
    static readonly JAVASCRIPT = new Tag('Javascript', 'orange');
    static readonly REACT = new Tag('React', 'blue');
    static readonly RUBY_ON_RAILS = new Tag ('Ruby On Rails', 'red');

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key; 
    }
}
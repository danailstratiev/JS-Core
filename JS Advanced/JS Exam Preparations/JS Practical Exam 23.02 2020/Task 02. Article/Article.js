class Article {
    
    constructor(title, creator){
        this.title = title,
        this.creator = creator,
        this._comments = [],
        this._likes = []
    }

    get likes(){
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        }

        return `${this._likes[0]} and ${this._likes.length-1} others like this article!`;
    } 

    like (username){
        let userIndex = this._likes.findIndex((u) => u === username);

        if (userIndex > -1) {
            return "You can't like the same article twice!";
        }

        if (username === this.creator) {
            return "You can't like your own articles!";
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike (username){
        let userIndex = this._likes.findIndex((u) => u === username);

        if (userIndex < 0) {
            throw new Error('You can\'t dislike this article!');
        }

        this._likes.splice(userIndex, 1);

        return `${username} disliked ${this.title}`;
    }

    comment (username, content, id){
        let commentIndex = this._comments.findIndex((u) => u.Id === id);

        if (id === undefined || commentIndex < 0 || this._comments[commentIndex].content === undefined
            || this._comments[commentIndex].content === '') {
            if (id === undefined) {
                id = this._comments.length+1;
            }
            let comment = {
                Id: this._comments.length+1,
                Username : username,
                Content : content,
                Replies:[]
            }

            this._comments.push(comment);

            return `${username} commented on ${this.title}`;
        }

        let reply = {
            Id:id,
            Username : username,
            Content : content
        }

        let comment = this._comments[commentIndex];
        if (comment.Replies.length === 0) {
            reply.Id = comment.Id + 0.1;            
        }else{
            reply.Id = Math.round(((comment.Replies[comment.Replies.length-1].Id + 0.1)  + Number.EPSILON) * 100) / 100;            
        }
        comment.Replies.push(reply);
        
        return 'You replied successfully';
    }

    toString(sortingType){
        let result = '';
        result += `Title: ${this.title}`;
        result += '\n';
        result += `Creator: ${this.creator}`;
        result += '\n';
        result += `Likes: ${this._likes.length}`;
        result += '\n';
        result += 'Comments:';

        if (sortingType === 'asc') {
            if (this._comments.length > 0) {
                let commentsToPrint = this._comments.sort((a,b) => a.Id - b.Id);
            for (const element of commentsToPrint) {
                result += '\n';
                result += `-- ${element.Id}. ${element.Username}: ${element.Content}`;
                let replies = element.Replies.sort((a,b) => a.Id - b.Id);
                for (const reply of replies) {
                result += '\n';
                result += `--- ${reply.Id}. ${reply.Username}: ${reply.Content}`;
                }
                result += '\n';
                result += '...';
            }
        }            
        }else if (sortingType === 'desc') {
            let commentsToPrint = this._comments.sort((a,b) => b.Id - a.Id);
            for (const element of commentsToPrint) {
                result += '\n';
                result += `-- ${element.Id}. ${element.Username}: ${element.Content}`;
                let replies = element.Replies.sort((a,b) => b.Id - a.Id);
                for (const reply of replies) {
                result += '\n';
                result += `--- ${reply.Id}. ${reply.Username}: ${reply.Content}`;
                }
            }
        }else if (sortingType === 'username') {
            let commentsToPrint = this._comments.sort(function(a,b){
                return ('' + a.Username).localeCompare(b.Username);
            }); 
            for (const element of commentsToPrint) {
                result += '\n';
                result += `-- ${element.Id}. ${element.Username}: ${element.Content}`;
                let replies = element.Replies.sort(function(a,b){
                    return ('' + a.Username).localeCompare(b.Username);
                }); 
                for (const reply of replies) {
                result += '\n';
                result += `--- ${reply.Id}. ${reply.Username}: ${reply.Content}`;
                }
            }
        }

        return result;
    }
}


let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));


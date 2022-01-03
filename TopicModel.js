const TopicModel = {
    id: undefined,
    name: 'Le nom de votre thème ici',
    qaList: [
        Object.create(QAModel, { id: 0 })
    ],
    addQA() {
        let currentLength = this.qaList.length;
        this.qaList.push(
            Object.create(QAModel, {id: currentLength})
        )
    },
    removeQA(id){
        this.qaList.slice(id, 1);
    },
};

export default TopicModel;
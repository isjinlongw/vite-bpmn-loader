const transform = (src, id) => { 
    if (id.endsWith('.bpmn') || id.endsWith('.bpmn')) {
        const schema = JSON.stringify(src);
        return {
            code: `export default ${schema}`
        }
      }
};
module.exports =  function BpmnLoader () { 
    return {
        name: 'bpmn-loader',
        transform
    }
}
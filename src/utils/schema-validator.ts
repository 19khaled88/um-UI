
export const getErrorMessageByPropertyName = (obj: Record<string, unknown>, propertyPath: string) => {
    const properties = propertyPath.split('.');

    let value:unknown = obj;

    for (const prop of properties) { 
        if (typeof value === 'object' && value !== null && prop in value) {
            value = (value as Record<string, unknown>)[prop];
        } else {
            return undefined;
        }
    }
    if(typeof value === 'object' && value !== null && 'message' in value){
        return (value as {message:string}).message
    }
    return undefined;
}

//////////// Building an Object ////////////

// First, create an object called words with the keys given below. Each key's property should be an empty string. This is where we will save the user's input later.
// The keys: number, adjective, plural noun (pluralNoun), adverb, another adjective (anotherAdjective)

const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: ""
};

//////////// Interact With the User ////////////

/* Start by creating a function called startMadlib that prompts a user to enter each word type and save their input 
to the appropriate object key. */

const startMadlib = () => {
    words.number = prompt("Give me any number"); 
    words.adjective = prompt("Give me an adjective");
    words.pluralNoun = prompt("Give me a plural noun");
    words.adverb = prompt("Give me an adverb");
    words.anotherAdjective = prompt("Give me another adjective");
    return {...words}

}
console.log(startMadlib());

//////////// Create the Tech Startup MadLib Story ////////////

const madlibStory = (words) => {
    return alert(`Once upon a time a group of ${words.number} General Assembly graduates got together and made a startup called ${words.adjective} Technologies. Their goal was to create smart ${words.pluralNoun}.They approached the challenge ${words.adverb} which ultimately lead them to ${words.anotherAdjective} fame.`)
}
madlibStory(words);


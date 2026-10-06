/* Step 1: Implement the `WebComponent` Base Class 
Define a class `WebComponent` with:   
 - A constructor that initializes a `selector` property.    
 - A `click()` method that prints a console message simulating a click.    
 - A `focus()` method that prints a console message simulating focusing on the component.  
 Step 2: Implement the `Button` Derived Class 
 Define a class `Button` that extends `WebComponent`.
  - Override the `click()` method to include an additional message specific to buttons. 
Step 3: Implement the `TextInput` Derived Class 
Define a class `TextInput` that extends `WebComponent` with:    
- A property `value` initialized to an empty string.    
- An `enterText(text: string)` method that sets `value` and prints a message simulating text entry. 
Step 4: Testing the Components 
Define a function testComponents to demonstrate the usage of the classes 
-  Instantiate the `Button` and `TextInput` classes with example selectors.   
- Use the instances to simulate clicking the button and entering text into the text input. 
*/

// ==========================================
// STEP 1: BASE CLASS (THE PARENT)
// ==========================================

// WebComponent serves as the blueprint for all UI elements
class WebComponent {
    // Property to store the CSS locator/address of the element
    selector: string;

    // The constructor runs automatically when creating a new instance to set the selector
    constructor(selector: string) {
        this.selector = selector; 
    }

    // Default action to simulate a mouse click
    click() {
        console.log(`simulating a click from Parent class ${this.selector}`)
    }

    // Default action to simulate focusing on an element (like clicking inside an input box)
    focus() {
        console.log(`simulating focusing on the component ${ this.selector}`)
    }
}

// ==========================================
// STEP 2: BUTTON CLASS (CHILD OF WEBCOMPONENT)
// ==========================================

// Button inherits everything from WebComponent using the 'extends' keyword
class Button extends WebComponent {
    
    // This overrides the parent's click method to add button-specific behavior
    click() {
        // 'super.click()' forwards the action to execute the parent class's click function
        super.click()
    }
}

// ==========================================
// STEP 3: TEXTINPUT CLASS (CHILD OF WEBCOMPONENT)
// ==========================================

// TextInput inherits from WebComponent and adds text-handling capabilities
class TextInput extends WebComponent {
    // A unique property to hold the text string typed by a user (starts empty)
    value: string = ""

    // A custom method to simulate a user typing into this input field
    enterText(text: string) {
        // 'this.value' saves the typed text inside the object's memory state
        this.value = text;
        console.log(`Text entered successfully: ${this.value}`);
    }
}

// ==========================================
// STEP 4: TESTING THE COMPONENTS (RUNNER)
// ==========================================

// A wrapper function designed to verify that our classes work correctly
function testComponents(): void {

    // 1. Create instances (objects) of our components with custom selectors
    const loginButton = new Button("#login-submit");
    const emailInput = new TextInput("input[type='email']");

    // 2. Interact with the Button component
    console.log("clicking the button");
    loginButton.click(); // Triggers the Button click -> which calls super.click()

    // 3. Interact with the TextInput component
    console.log("Entering the Value");
    emailInput.enterText("user@example.com"); // Sets the value property and logs it
    
    // 4. Double check that the data was actually saved inside the object state
    console.log(`Verified current input value: "${emailInput.value}"`);
}

// Execute the test function to output the results to the terminal window
testComponents();


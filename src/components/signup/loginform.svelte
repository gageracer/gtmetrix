<script lang="ts">
  import {
    useForm,
    Hint,
    HintGroup,
    validators,
    required,
    minLength,
    email
  } from 'svelte-use-form';
  import { fade } from 'svelte/transition';
  import { passwordMatch, passwordCheck } from './customValidators';

  let otherCheckbox: string;
  let signedUp = false;

  const form = useForm();
  const resetForm = () => {
    $form.reset();
  };
  const closeSignedUpBox = () => {
    signedUp = false;
    resetForm();
  };
  const submitForm = () => {
    signedUp = true;
    console.log($form.values);
  };
  // Te1@$

  const requiredMessage = 'This field is required';
</script>

<main>
  <form class="signup-form" use:form>
    {#if signedUp}
      <div class="signedup" transition:fade>
        Thanks for signning up, {$form.name.value}!
        <span class="closebtn" on:click={closeSignedUpBox}>&times;</span>
      </div>
    {/if}
    <h2>Sign Up Form</h2>
    <label for="email">Email:</label>
    <input type="email" name="email" use:validators={[required, email]} />
    <HintGroup for="email">
      <Hint on="required">{requiredMessage}</Hint>
      <Hint on="email" hideWhenRequired>This must be a valid email</Hint>
    </HintGroup>

    <label for="name">Name:</label>
    <input type="text" name="name" />

    <div class="password">
      <label for="password">Password:</label>
      <input
        type="password"
        name="password"
        use:validators={[required, passwordCheck]}
      />
      <HintGroup for="password">
        <Hint on="required">{requiredMessage}</Hint>
        <Hint on="passwordCheck"
          >{JSON.stringify($form.password?.errors.strong)}</Hint
        >
        <Hint on="minLength" hideWhenRequired let:value
          >This field must have at least {value} characters.</Hint
        >
        <Hint on="containNumbers" hideWhen="minLength" let:value>
          This field must contain at least {value} numbers.
        </Hint>
      </HintGroup>

      <label for="passwordConfirmation">Confirm Password:</label>
      <input
        type="password"
        name="passwordConfirmation"
        use:validators={[required, passwordMatch]}
      />
      <HintGroup for="passwordConfirmation">
        <Hint on="required">{requiredMessage}</Hint>
        <Hint on="passwordMatch" hideWhenRequired>Passwords do not match</Hint>
      </HintGroup><br />
    </div>
    <div class="refer">
      <label for="referrer">Referrer:</label>
      LinkedIn
      <input
        bind:group={otherCheckbox}
        name="referrer"
        type="radio"
        value="linkedin"
        use:validators={[required]}
      />
      Friend
      <input
        bind:group={otherCheckbox}
        name="referrer"
        type="radio"
        value="friend"
        use:validators={[required]}
      />
      Colleague
      <input
        bind:group={otherCheckbox}
        name="referrer"
        type="radio"
        value="colleague"
        use:validators={[required]}
      />
      Other
      <input
        bind:group={otherCheckbox}
        name="referrer"
        type="radio"
        value="other"
        use:validators={[required]}
      />
      <input
        type="text"
        name="referrer"
        value="News"
        disabled={otherCheckbox != 'other'}
        use:validators={[required, minLength(3)]}
      />
      <Hint for="referrer">At least 1 must be checked</Hint>
    </div>
    <div class="account-type">
      <label for="account">Account Type:</label>
      Student
      <input
        type="radio"
        name="account"
        value="student"
        use:validators={[required]}
      />
      Employer
      <input
        type="radio"
        name="account"
        value="employer"
        use:validators={[required]}
      />
      Employee
      <input
        type="radio"
        name="account"
        value="employee"
        use:validators={[required]}
      />
      Gamer
      <input
        type="radio"
        name="account"
        value="gamer"
        use:validators={[required]}
      />
    </div>
    <div class="terms">
      “I accept the Terms of Service"
      <input
        type="radio"
        name="terms"
        value="acceptedterms"
        use:validators={[required]}
      />
    </div>

    <button disabled={!$form.valid} on:click|preventDefault={submitForm}>
      Submit
    </button>
    <button on:click|preventDefault={resetForm}>Reset</button>
  </form>
</main>

<style>
  .signedup {
    text-align: center;
    border: 10px skyblue solid;
    background-color: skyblue;
    border-radius: 10px;
  }
  .terms {
    margin-top: 1em;
    margin-bottom: 1em;
  }
  .refer {
    font-size: 1rem;
  }
  .refer > label {
    font-size: 1.5rem;
    padding-right: 1rem;
  }
  .account-type > input {
    margin-right: 2rem;
  }
  .account-type {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 1rem;
  }
  .account-type > label {
    font-size: 1.5rem;
    padding-right: 1rem;
  }
  .signup-form {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.5rem;
  }
  label {
    color: yellow;
    align-self: flex-start;
  }
  .password {
    display: flex;
    flex-direction: column;
  }
  .closebtn {
    cursor: pointer;
    float: right;
    padding-right: 10%;
  }
  @media only screen and (max-width: 1000px) {
    .signup-form {
      height: 100%;
      width: 90%;
    }
  }
</style>

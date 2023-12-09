<script>
  import { onMount } from 'svelte';
  import { supabase } from '$lib/server/supabaseClient';// Import your Supabase client

  let user;

  const signInWithGoogle = async () => {
    const { user, error } = await supabase.auth.signIn({
      provider: 'google',
    });

    if (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  onMount(async () => {
    // Check if a user is already authenticated
    const { user } = await supabase.auth.session();
    if (user) {
      // User is already signed in
      console.log('User is already signed in:', user);
    }
  });
</script>

<style>
  /* Add your styling here */
</style>

<main>
  {#if user}
    <p>Hello, {user.email}!</p>
    <button on:click={signOut}>Sign Out</button>
  {:else}
    <button on:click={signInWithGoogle}>Sign In with Google</button>
  {/if}
</main>

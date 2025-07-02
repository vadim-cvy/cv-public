<template>
  <div class="hero">
    <div class="hero__text">
      <span>
        <b>Hello!</b> My name is
      </span>

      <h1 class="hero__text__name">
        Vadim Cherepenichev
      </h1>

      <span>
        and I'm a <b>JS/TS Developer</b>
      </span>

      <span>
        with over <b>4 years of experience</b>
      </span>
    </div>

    <img class="hero__img" src="@/assets/img/me.jpg" alt="Me">
  </div>
</template>

<style lang="scss">
.hero
{
  display: grid;
  grid-template-columns: 1fr max-content;
  background-color: var(--color-ultra-dark);

  @media screen and (max-width: 560px)
  {
    grid-template-columns: 1fr;
  }

  &__text
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: var(--color-ultra-light);
    line-height: 1.85em;
    padding: 20px;

    @media screen and (max-width: 560px)
    {
      padding-top: 30px;
      padding-bottom: 30px;
    }

    &__name
    {
      margin: .5em 0;
      font-size: 2em;

      @media screen and (max-width: 768px)
      {
        font-size: 1.4em;
      }
    }
  }

  &__img
  {
    width: 50vw;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 1024px)
    {
      width: 40vw;
    }

    @media screen and (max-width: 560px)
    {
      width: 100%;
    }
  }
}
</style>
from __future__ import annotations

import voluptuous as vol

from homeassistant import config_entries

from .const import DOMAIN


class ThemeGeneratorConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Config flow for Theme Generator."""

    VERSION = 1

    async def async_step_user(self, user_input=None):
        """Create one Theme Generator entry."""
        errors = {}

        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")

        if user_input is not None:
            return self.async_create_entry(title="Theme Generator", data={})

        return self.async_show_form(
            step_id="user",
            data_schema=vol.Schema({}),
            errors=errors,
        )

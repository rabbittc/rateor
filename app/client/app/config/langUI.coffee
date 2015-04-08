langList =
  "en": "En"
  "kh": "ខ្មែរ"

Lang.setList(langList)

Lang.swith = (lang) ->
  T9n.setLanguage(lang)
  accountsUIBootstrap3.setLanguage(lang)

Lang.init = (lang) ->
  T9n.defaultLanguage = lang
  accountsUIBootstrap3.setLanguage(lang)
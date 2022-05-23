# Module


### Account
```
private String code;
private String name;
private String password;
private Double amount;
private Double initialAmount;
private Double revenueAmount;
private Double expenseAmount;
private Boolean isDefault;
```

### Budget
```
private String id;
private String name;
private String code;
private Double amount;
private String period;
private Long account;
```

### Category
```
private String name;
private String code;
private String account;
private String parent;
private Long weight;
private Boolean isDefault;
```

### Currency
```
private String name;
private String code;
private Integer precision;
private Integer roundMode;
```

### Expense
```
private String code;
private Double amount;
private String description;
private Date dateExpense;
private String account;
private String category;
private String tag;
```

### Revenue

```
private Double amount;
private String description;
private Date date;
private Long account;
private Long category;
private String tag;
```
